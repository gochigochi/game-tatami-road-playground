export const cleanedString = (str) => {
    return str.replace(/、|。|ー/g, "").trim()
}