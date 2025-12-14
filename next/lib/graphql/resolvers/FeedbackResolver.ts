import { Arg, Args, Mutation } from 'type-graphql';
import { FeedbackType } from '../types/Feedback';
import { FeedbackInput } from '../inputs/FeedbackInput';
import { prisma } from 'lib/prisma';
// import { Feedback } from '@prisma/client';

export class FeedbackResolver {
    @Mutation(() => FeedbackType)
    async createFeedback(@Arg('data') data: FeedbackInput) {
        const { email, username, message } = data;

        return await await prisma.feedback.create({
            data: {
                email,
                username,
                message,
            },
        });
        // return res;
    }
}
