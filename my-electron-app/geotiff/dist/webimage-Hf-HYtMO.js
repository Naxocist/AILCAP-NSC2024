import { B as r } from "./basedecoder-PFIibI7U.js";
class s extends r {
  constructor() {
    if (super(), typeof createImageBitmap > "u")
      throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");
    if (typeof document > "u" && typeof OffscreenCanvas > "u")
      throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");
  }
  async decode(i, n) {
    const o = new Blob([n]), e = await createImageBitmap(o);
    let t;
    typeof document < "u" ? (t = document.createElement("canvas"), t.width = e.width, t.height = e.height) : t = new OffscreenCanvas(e.width, e.height);
    const a = t.getContext("2d");
    return a.drawImage(e, 0, 0), a.getImageData(0, 0, e.width, e.height).data.buffer;
  }
}
export {
  s as default
};
//# sourceMappingURL=webimage-Hf-HYtMO.js.map
