
"use client";

import React from "react";
import useImageUpload from "@/hooks/uploadFile";

export default function UploadPreviewForm({
    id,
    setFieldValue,
}: {
    id: number;
    setFieldValue?: (field: string, value: any) => void;
}) {
    const { uploadFileHandler, preview, isLoading, error } = useImageUpload();

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

            {isLoading && <div>Uploading...</div>}

            {error && <div className="text-red-500">{error}</div>}

            {preview ? (
                <img src={preview} alt="Preview" width={250} height={150} className="mt-2" />
            ) : (
                <div className="mt-2 text-sm text-gray-500">No preview yet.</div>
            )}
        </div>
    );
}
