"use client"

import CreateMovieForm from "@/components/admin/createMovie/CreateMovieForm";
import Wrapper from "@/components/global/wrapper/Wrapper";


export default function CreateMovie() {



    return (<Wrapper>

        <h1 className="text-2xl text-center flex justify-center m-auto pb-3">        Create Movie</h1>


        <CreateMovieForm />

    </Wrapper>)

}