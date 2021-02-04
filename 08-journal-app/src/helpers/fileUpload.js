export const fileUpload = async (file) => {
  //url cloudinary API KEY...
  const cloudUrl = process.env.REACT_APP_API_KEY;

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
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
      throw await response.json();
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
