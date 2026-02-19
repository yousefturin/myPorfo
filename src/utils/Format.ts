
/**
* Utility for formatting.
*
* @namespace ISOFormat
*/
class Format {
    static SterilizeFiledName(fileName: string): string {
        return fileName.replace(/[^a-zA-Z0-9.\-_]/g, '-');
    }

}
export default Format;