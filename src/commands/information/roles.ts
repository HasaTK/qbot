import { robloxGroup } from '../../main';
import { CommandContext } from '../../structures/addons/CommandAddons';
import { Command } from '../../structures/Command';
import { getRoleListEmbed } from '../../handlers/locale';

class RolesCommand extends Command {
    constructor() {
        super({
            trigger: 'roles',
            description: 'Gruptaki rolleri listeler',
            type: 'ChatInput',
            module: 'information',
        });
    }

    async run(ctx: CommandContext) {
        const roles = await robloxGroup.getRoles();
        return ctx.reply({ embeds: [ getRoleListEmbed(roles) ] });
    }
}

export default RolesCommand;
