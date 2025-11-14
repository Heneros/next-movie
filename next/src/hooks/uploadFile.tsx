
"use client"
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


        const MAX_MB = 2;
        if (file.size > MAX_MB * 1024 * 1024) {
            setError(`File too large. Max ${MAX_MB} MB`);
            return null;
        }

        try {
            const res = await sendPreview({ movieId, file }).unwrap();

            if (res?.image) {
                setPreview(res.image);
                if (setFieldValue) setFieldValue("file", res.image);
            }
            return res;
        } catch (err: any) {

            if (err?.status === 413) setError("File too large (server)");
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

