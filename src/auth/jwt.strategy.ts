import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-jwt'
import { DatabaseService } from "src/database/database.service";
import { ExtractJwt } from 'passport-jwt';


@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly databaseService: DatabaseService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "Secret"
        })
    }

    async validate(payload: { email: string }) {
        console.log("Payload: ", payload)
        const user = await this.databaseService.user.findUnique({
            where: {
                email: payload.email
            },
        })
        return user;
    }
}
