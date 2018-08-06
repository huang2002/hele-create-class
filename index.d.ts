import HEle = require("hele");

export = HEle;

declare module "HEle" {
    interface CreateClassOptions<P extends HEle.AnyProps = HEle.AnyProps, S = any, SS = any> {
        constructor?: (this: HEle.Component<P, S, SS>, props: P) => void;
        render(this: HEle.Component<P, S, SS>): any;
        onWillMount?: (this: HEle.Component<P, S, SS>) => void;
        onDidMount?: (this: HEle.Component<P, S, SS>) => void;
        shouldUpdate?: (this: HEle.Component<P, S, SS>, oldStates: S, newStates: S) => boolean;
        onWillUpdate?: (this: HEle.Component<P, S, SS>) => SS;
        onDidUpdate?: (this: HEle.Component<P, S, SS>, snapshot: SS) => void;
        onWillUnmount?: (this: HEle.Component<P, S, SS>) => void;
        onDidUnmount?: (this: HEle.Component<P, S, SS>) => void;
        onUncaughtError?: (this: HEle.Component<P, S, SS>, error: Error) => void;
        defaultProps?: HEle.AnyProps;
    }
    function createClass<P extends HEle.AnyProps = HEle.AnyProps, S = any, SS = any>(options: CreateClassOptions<P, S, SS>): HEle.ComponentConstructor<P, S, SS>;
}
