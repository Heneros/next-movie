import { AddMovieCollectionHandler } from "../AddMovieCollection.handler";

describe("AddMovieCollection", () => {
  let handler: AddMovieCollectionHandler;

  let collectionsRepository: {
    findUnique: jest.Mock;
    addMovieToCollection: jest.Mock;
  };
  beforeEach(() => {
    collectionsRepository: {
      findUnique: jest.fn();
      addMovieToCollection: jest.fn();
    }

    handler = new AddMovieCollectionHandler(collectionsRepository as any);
  });

  it("should add movie to collection", () => {
    collectionsRepository.findUnique.mockResolvedValue(null);
  });
});
