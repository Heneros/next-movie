
"use client";

import React from "react";
import useImageUpload from "@/hooks/uploadFile";
import { useGetPreviewQuery } from "@/redux/movie/moviesApiSlice";
import Image from "next/image";

export default function UploadPreviewForm({
    id,
    setFieldValue,
}: {
    id: number;
    setFieldValue?: (field: string, value: any) => void;
}) {

    const { data: previewData, isLoading: loadingPreview, isError, error: errPrev } = useGetPreviewQuery(id)

    const { uploadFileHandler, preview, isLoading, error } = useImageUpload();

    // console.log(previewData)
    return (
        <div className="flex flex-col items-start">
            <label htmlFor="uploadPreview" className="mb-2">
                Upload Preview
            </label>

            <input
                id="file"
                type="file"
                accept="image/*"
                onChange={(e) => uploadFileHandler(id, e, setFieldValue)}
                className="mb-2"
            />

            {(loadingPreview || isLoading) && <div>Uploading...</div>}

            {error && <div className="text-red-500">{error}</div>}

            {preview ? (
                <img src={preview} alt="Preview" width={450} height={250} className="mt-2" />
            ) : previewData ? (
                <>
                    <Image src={previewData.url} width={450} height={250} alt="Movie" />
                </>
            ) : <div className="mt-2 text-sm text-gray-500">No preview yet.</div>}
        </div >
    );
}
