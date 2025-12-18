
"use client"
import { MAX_SIZE_IMG } from "@/_data/constants";
import { useUploadPreviewMutation } from "@/redux/movie/moviesApiSlice";
import { useState } from "react";

const useImageUpload = () => {
        const [sendPreview, { isLoading }] = useUploadPreviewMutation();
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);


    const uploadFileHandler = async (
        movieId: number,
        e: React.ChangeEvent<HTMLInputElement>,
        setFieldValue?: (field: string, value: any) => void
    ) => {
        setError(null);

        const file = e.target.files?.[0];
        if (!file) {
            setError("No file selected");
            return null;
        }

        // console.log(MAX_SIZE_IMG)


        if (file.size > MAX_SIZE_IMG * 1024 * 1024) {
            setError(`File too large. Max ${MAX_SIZE_IMG} MB 333`);
            return null;
        }

        try {

            const res = await sendPreview({ movieId, file }).unwrap();

            // console.log('res', res)
            if (res?.url) {

                setPreview(res.url);
                if (setFieldValue) setFieldValue("file", res.url);
            }
            return res;
        } catch (err: any) {

            if (err?.status === 413) setError("File too large ");
            else if (err?.data?.message) setError(err.data.message);
            else setError("Upload failed");
            console.error("Upload error", err);
            return null;
        }
    };
    return {
        uploadFileHandler,
        preview,
        setPreview,
        isLoading,
        error,
    };
};


export default useImageUpload;

