export const fileUpload = async (file) => {
  //url cloudinary API KEY...
  const cloudUrl = process.env.REACT_APP_API_KEY;
  const preset = process.env.REACT_APP_PRESET;

  const formData = new FormData();
  formData.append('upload_preset', preset);
  formData.append('file', file);

  try {
    const response = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const cloudResponse = await response.json();
      return cloudResponse.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
