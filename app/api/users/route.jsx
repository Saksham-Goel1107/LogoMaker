import { db } from "@/configs/FirebaseConfig"
import { ref, get, set } from "firebase/database"
import { NextResponse } from "next/server"

export async function POST(req){
    const {userEmail, userName} = await req.json();
    try {
        // Replace dots in email with underscores for valid Firebase path
        const userRef = ref(db, `users/${userEmail.replace(/\./g, '_')}`)
        const snapshot = await get(userRef)
        
        if(snapshot.exists()){
            return NextResponse.json(snapshot.val())
        } else {
            const data = {
                Name: userName,
                Email: userEmail,
                credits: 5
            }
            
            try {
                await set(userRef, data)
                return NextResponse.json(data)
            } catch (writeError) {
                console.error("Error writing to Firebase:", writeError)
                return NextResponse.json(
                    { error: "Failed to create user profile" },
                    { status: 503 }
                )
            }
        }
    } catch (error) {
        console.error("Error accessing Firebase:", error)
        
        // Handle specific Firebase errors
        if (error.code === 'permission-denied') {
            return NextResponse.json(
                { error: "Permission denied. Please check your Firebase rules." },
                { status: 403 }
            )
        }
        
        if (error.code === 'unavailable') {
            return NextResponse.json(
                { error: "Service temporarily unavailable. Please check your internet connection." },
                { status: 503 }
            )
        }
        
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}