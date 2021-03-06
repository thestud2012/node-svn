import InfoOptions from "./infoOptions";
import InfoResult from "./infoResult";

import parseXml from "../utils/parseXml";
import spawn from "../utils/spawn";

export default class {
    options: InfoOptions;

    constructor(options: InfoOptions) {
        if (!options.source)
            throw new Error("source is required");

        this.options = options;
    }

    async exec(): Promise<string | InfoResult[]> {
        const args = this.parseArgs();

        const result = await spawn("svn", ...args);

        if (this.options.format == "json")
            return await this.transform(result);

        return result;
    }

    parseArgs(): string[] {
        const args = ["info"];

        if (this.options.format == "json" || this.options.format == "xml")
            args.push("--xml");

        if (this.options.recursive)
            args.push("-R");

        if (this.options.revision)
            args.push(...["-r", this.options.revision.toString()]);

        args.push(this.options.source);

        return args;
    }

    async transform(xml: string): Promise<InfoResult[]> {
        const obj = await parseXml(xml);

        return obj.info.entry.map(x => new InfoResult({
            revision: parseInt(x.$.revision, 10),
            kind: x.$.kind,
            path: x.$.path,
            url: x.url[0],
            relativeUrl: x["relative-url"][0],
            repository: {
                uuid: x.repository[0].uuid[0],
                root: x.repository[0].root[0]
            },
            commit: {
                revision: parseInt(x.commit[0].$.revision, 10),
                author: x.commit[0].author[0],
                date: new Date(x.commit[0].date[0])
            }
        }));
    }
}