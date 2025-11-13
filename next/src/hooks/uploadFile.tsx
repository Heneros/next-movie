
"use client"
import { useUploadPreviewMutation } from "@/redux/movie/moviesApiSlice";
import { useState } from "react";

const useImageUpload = () => {
    const [sendPreview] = useUploadPreviewMutation();
    const [preview, setPreview] = useState<string | null>(null);

    const uploadFileHandler = async (movieId, e: React.ChangeEvent<HTMLInputElement>,
        setFieldValue?: (field: string, value: any) => void,) => {
        if (!e.target.files || e.target.files.length === 0) {
            return <div>'No file selected'</div>;
        }
        try {
            const imagePreview = e.target.files[0]
            const res = await sendPreview({
                movieId,
                imagePreview
            }).unwrap()
            if (setFieldValue) {
                setPreview(res.image);
                setFieldValue('preview', res.image);
            }
            return res.image;
        } catch (err: any) {
            if (err.status === 413) {
                return <div>'File is too large. Maximum size is 1MB'</div>;
            } else if (err.data?.message) {
                return <div>{err.data.message} </div>;
            } else {

                return <div>'Error uploading image'</div>;
            }
            console.error('Upload error:', err);
            return null;
        }
    }
    return {
        uploadFileHandler,
        preview,
        setPreview,
    };
};


export default useImageUpload;

