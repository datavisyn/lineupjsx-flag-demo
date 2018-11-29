import { ICellRendererFactory, Column, ERenderMode, IRenderContext, IStatistics, ICategoricalStatistics, IImposer, ICellRenderer, IGroupCellRenderer, ISummaryRenderer, IDataRow, IGroup } from 'lineupjs';

export default class FlagRenderer implements ICellRendererFactory {
    readonly title = 'FlagRenderer';

    // readonly groupTitle?: string;
    // readonly summaryTitle?: string;

    canRender(col: Column, mode: ERenderMode): boolean {
        return col.label === 'flag' && mode === ERenderMode.CELL;
    }


    create(col: Column, context: IRenderContext, hist: IStatistics | ICategoricalStatistics | null, imposer?: IImposer): ICellRenderer {
        return {
            template: `<div style="height:18px;overflow:hidden;"><img src='' style="height:18px;"></div>`,
            update(node: HTMLElement, d: IDataRow, i: number, group: IGroup) {
                (<HTMLImageElement>node.firstElementChild).src = col.getValue(d);
            },
            render(ctx: CanvasRenderingContext2D, d: IDataRow, i: number, group: IGroup) { }
        }
    }

    createGroup(col: Column, context: IRenderContext, hist: IStatistics | ICategoricalStatistics | null, imposer?: IImposer): IGroupCellRenderer {
        return {
            template: `<div></div>`,
            update(node: HTMLElement) {
            }
        }
    }

    createSummary(col: Column, context: IRenderContext, interactive: boolean, imposer?: IImposer): ISummaryRenderer {
        return {
            template: `<div></div>`,
            update(node: HTMLElement) {
            }
        }
    }
}