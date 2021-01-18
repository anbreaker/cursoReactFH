export const fileUpload = async (file) => {
  //url cloudinary mañana...
  const cloudUrl = '';

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
