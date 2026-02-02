import { tvShowDataTest } from "@/data/testsData";
import { CreateTvShowHandler } from "../CreateTvShow.handler";
import { TvShowController } from "@/tv-shows/tv-shows.controller";
import { CreateTvShowCommand } from "@/tv-shows/commands";
import { BadRequestException } from "@nestjs/common";




describe('CreateTvShowHandler', () => {

               let handler: CreateTvShowHandler;

               let tvShowRepository: {
                 findByTitleOrSlug: jest.Mock;
                 createTvShow: jest.Mock;
               };

               beforeEach(() => {
                 tvShowRepository = {
                   findByTitleOrSlug: jest.fn(),
                   createTvShow: jest.fn(),
                 };

                 handler = new CreateTvShowHandler(
                   tvShowRepository as any,
                 );
               })
                 it('should create a tvShow successfully', async () => {
tvShowRepository.findByTitleOrSlug.mockResolvedValue(null); 
    const createdTvShow = { id: 1, ...tvShowDataTest, createdBy: 1 };
tvShowRepository.createTvShow.mockResolvedValue(createdTvShow);

const result = await handler.execute(
               new CreateTvShowCommand(1, tvShowDataTest)
)

expect(result).toEqual(createdTvShow);

                 });

                                  it('should not create a tvShow', async () => {
tvShowRepository.findByTitleOrSlug.mockResolvedValue(tvShowDataTest); 

const command = await new CreateTvShowCommand(1, tvShowDataTest);

await expect(handler.execute(command)).rejects.toBeInstanceOf(
  BadRequestException,
);

expect(tvShowRepository.createTvShow).not.toHaveBeenCalled();

                 });
})







