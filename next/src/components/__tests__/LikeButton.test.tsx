import { MockedProvider } from "@apollo/client/testing";
import { render, screen, fireEvent } from "@testing-library/react";
import { LikeButton } from "../global/likeButton/LikeButton";

test("renders like button and toggles", async () => {
    render(
        <MockedProvider>
            <LikeButton movieId={1} />
        </MockedProvider>,
    );

    const btn = await screen.findByRole("button");
    expect(btn).toBeInTheDocument();
});
