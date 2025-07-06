import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#B68298" }}
    >
      {/* Logo with fade-in animation */}
      <div className="animate-fade-in mb-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F8cb83502768745a4a67cc5a59e3de622%2F812fafd930e649a987a31d6033f45ca6?format=webp&width=800"
          alt="Subster logo"
          className="w-32 h-32 object-contain mx-auto"
        />
      </div>

      {/* App name and tagline with fade-in animation */}
      <div className="animate-fade-in-delayed text-center">
        <h1 className="text-white font-bold text-3xl mb-6">Subster</h1>

        {/* Tagline */}
        <p className="text-white text-base opacity-80 leading-relaxed max-w-sm mx-auto">
          Connecting great teachers with schools, instantly.
        </p>
      </div>
    </div>
  );
}
