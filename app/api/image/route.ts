import OpenAI from 'openai';
import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs";
import {increaseApiLimit,checkApiLimit} from "@/lib/api-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

export async function POST(req:Request) {
    try{
        const {userId} = auth();
        const body = await req.json();
        const {prompt,amount=1,resolution="512x512"} = body;

        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }

        if(!openai.apiKey){
            return new NextResponse("Open AI API key not found.",{status:500})
        }

        if(!prompt){
            return new NextResponse("Prompt is required",{status:400})
        }
        if(!amount){
            return new NextResponse("Amount is required",{status:400})
        }
        if(!resolution){
            return new NextResponse("Resolution is required",{status:400})
        }
        const freeTrial = await checkApiLimit();

        if(!freeTrial){
            return new NextResponse("Free trail has expired.",{status:403});
        }

        const response = await openai.images.generate({
            prompt,
            n: parseInt(amount,10),
            size: resolution,
          });
          await increaseApiLimit();

        return NextResponse.json(response.data);

    }
    catch(error){
        console.log("[IMAGE ERROR]",error);
        return new NextResponse("Internal Error",{status:500});
    }
}


