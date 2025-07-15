export default function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* 关闭按钮 */}
      <button className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 text-white font-black border-4 border-black rounded-full flex items-center justify-center hover:bg-red-400 transition-colors" onClick={onClose} aria-label="关闭">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
        </svg>
      </button>
    </>
  );
}
