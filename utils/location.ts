const GOOGLE_API_KEY = 'AIzaSyAkZUOf4pyXFBrPCwc7zsUcOckRb_8k1gM';
// const GOOGLE_API_KEY = 'AIzaSyCtnj2gaXlTy0hOA2Rj3-43xMyfcD2hUyA';

export function getMapPreview(lat: number, long: number) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:red%7C${lat},${long}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}
