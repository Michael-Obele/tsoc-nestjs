import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


export class JwtAuthGuard extends AuthGuard("jwt") {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }
    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            console.log('User In error:', user);
            console.log("Error in error", err);

            throw err || new UnauthorizedException();
        }
        console.log('User:', user);
        return user
    }
}