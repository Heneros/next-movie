import type { Context } from '@/interfaces/gQLContext.interface';
import { prisma } from 'lib/prisma';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class LikeResolver {
    @Query(() => Int)
    async likesCount(@Arg('movieId', () => Int) movieId: number) {
        return prisma.like.count({ where: { movieId } });
    }

    @Query(() => Boolean)
    async userLiked(
        @Arg('movieId', () => Int) movieId: number,
        @Ctx() ctx: Context,
    ) {
        if (!ctx.user) return false;
        const r = await prisma.like.findUnique({
            where: { userId_movieId: { userId: ctx.user.id, movieId } },
        });
        return !!r;
    }

    @Mutation(() => Boolean)
    async toggleLike(
        @Arg('movieId', () => Int) movieId: number,
        @Ctx() ctx: Context,
    ) {
        if (!ctx.user) throw new Error('Not authenticated');

        const uid = ctx.user.id;
        const mid = movieId;

        const existing = await prisma.like.findUnique({
            where: { userId_movieId: { userId: uid, movieId: mid } },
        });

        if (existing) {
            await prisma.like.delete({
                where: { id: existing.id },
            });
            return false;
        } else {
            await prisma.like.create({ data: { userId: uid, movieId: mid } });
            return true;
        }
    }
}
