export const Loader = () => {
  let circleCommonClasses = "h-10 w-10 bg-current rounded-full";

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <h1 className="absolute top-60 text-7xl">Cargando</h1>
      <div className="flex items-center self-center justify-center w-screen gap-5">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};
