import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as Yup from 'yup';

interface FormData {
    email: string;
    username: string;
    message: string;
}

interface FeedbackState {
    formData: FormData;
    errors: Partial<FormData>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    errorMessage: string | null;
}

const initialState: FeedbackState = {
    formData: { email: '', username: '', message: '' },
    errors: {},
    status: 'idle',
    errorMessage: null,
};

const feedbackSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    username: Yup.string()
        .min(2, 'Username must be at least 2 characters')
        .required('Username is required'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
});

export const submitFeedback = createAsyncThunk(
    'feedback/submitFeedback',
    async (formData: FormData, { rejectWithValue }) => {
        try {
            await feedbackSchema.validate(formData, { abortEarly: false });
            const response = await axios.post('/api/feedback', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            //  console.log(response.data);
            return response.data;
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = error.inner.reduce(
                    (acc, err) => ({
                        ...acc,
                        [err.path!]: err.message,
                    }),
                    {},
                );
                return rejectWithValue(errors);
            }
            return rejectWithValue((error as Error).message);
        }
    },
);

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        updateFormData: (state, action: { payload: Partial<FormData> }) => {
            state.formData = { ...state.formData, ...action.payload };
            state.errors = {
                ...state.errors,
                ...Object.keys(action.payload).reduce(
                    (acc, key) => ({ ...acc, [key]: null }),
                    {},
                ),
            };
        },
        resetForm: (state) => {
            state.formData = { email: '', username: '', message: '' };
            state.errors = {};
            state.status = 'idle';
            state.errorMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitFeedback.pending, (state) => {
                state.status = 'loading';
                state.errorMessage = null;
            })
            .addCase(submitFeedback.fulfilled, (state) => {
                state.status = 'succeeded';
                state.formData = { email: '', username: '', message: '' };
                state.errors = {};
            })
            .addCase(submitFeedback.rejected, (state, action) => {
                state.status = 'failed';

                if (typeof action.payload === 'object') {
                    state.errors = action.payload as Partial<FormData>;
                } else {
                    state.errorMessage = action.payload as string;
                }
            });
    },
});

export const { updateFormData, resetForm } = feedbackSlice.actions;

export default feedbackSlice.reducer;
