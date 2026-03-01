import { useAtomValue } from "jotai";
import { coordinatesAtom } from "../../data/atoms";

const DevUi = () => {
  const coordinates = useAtomValue(coordinatesAtom);

  if (!coordinates) return null;

  return (
    <div className="fixed z-10 bg-zinc-700 rounded p-2 ml-2 mt-20">
      {coordinates.x.toFixed(0)}, {coordinates.y.toFixed(0)},{" "}
      {coordinates.z.toFixed(0)}
    </div>
  );
};

export default DevUi;
