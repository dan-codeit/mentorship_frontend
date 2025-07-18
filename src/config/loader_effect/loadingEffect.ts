export default function loadingEffect(loading: boolean): string {
  return loading
    ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
    : "bg-blue-600 hover:bg-blue-700";
}
