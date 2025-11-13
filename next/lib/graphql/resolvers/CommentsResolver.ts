import { prisma } from 'lib/prisma';

import { Resolver, Query, Arg, Int, Mutation, Ctx } from 'type-graphql';
import { CommentGQL, CommentsPage } from '../types/Comment';
import type { Context } from '@/interfaces/gQLContext.interface';

@Resolver()
export class CommentsResolver {
    @Query(() => CommentsPage)
    async comments(
        @Arg('movieId', () => Int) movieId: number,
        @Arg('page', () => Int) page: number,
        @Arg('limit', () => Int, { defaultValue: 10 }) limit: number,
    ): Promise<CommentsPage | null> {
        const skip = (page - 1) * limit;
        const [items, total] = await Promise.all([
            prisma.comment.findMany({
                where: { movieId },
                include: { user: true },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            prisma.comment.count({ where: { movieId } }),
        ]);

        return { items, total, page, limit };
    }

    @Mutation(() => CommentGQL)
    async postComment(
        @Arg('movieId', () => Int) movieId: number,
        @Arg('body') body: string,
        @Ctx() ctx: Context,
    ) {
        if (!ctx.user) throw new Error('Not authenticated');

        const comment = await prisma.comment.create({
            data: {
                movieId,
                userId: ctx.user.id,
                body,
            },
            include: { user: true },
        });
        return comment;
    }
}
