import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return `<div style="text-align:center;"><h1 style="font-family:Arial,sans-serif;">Hello! from Todo REST API<br>Made with &#10084;&#65039; by Michael</h1><p style="background-color:#f0f0f0; padding:10px; border-radius:5px; font-size:16px; font-weight:bold; color:#333333;"><a href="https://tsoc-nestjs.vercel.app/swagger" style="color:#0066cc; text-decoration:none;">Go to the Swagger Documentation</a></p></div>`;
    }
}