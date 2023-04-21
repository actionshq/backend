import { load as loadYaml } from "js-yaml";
import type { Action } from "@actionshq/actions";

export async function getActionBySlug(slug: string): Promise<Action> {
    // @ts-ignore
    const actionResponse = await fetch(`https://raw.githubusercontent.com/actionshq/actions/main/actions/${slug}.yaml`);
    if (!actionResponse.ok)
        throw new Error(`unknown action ${slug}`);
    // TODO: validate via json schema and use assertion function
    return loadYaml(await actionResponse.text()) as Action;
}
