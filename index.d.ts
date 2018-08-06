import { Component, ComponentConstructor, AnyProps } from "hele";

declare namespace HEle {
    export interface CreateClassOptions<P extends AnyProps = AnyProps, S = any, SS = any> {
        constructor?: (this: Component<P, S, SS>, props: P) => void;
        render(this: Component<P, S, SS>): any;
        onWillMount?: (this: Component<P, S, SS>) => void;
        onDidMount?: (this: Component<P, S, SS>) => void;
        shouldUpdate?: (this: Component<P, S, SS>, oldStates: S, newStates: S) => boolean;
        onWillUpdate?: (this: Component<P, S, SS>) => SS;
        onDidUpdate?: (this: Component<P, S, SS>, snapshot: SS) => void;
        onWillUnmount?: (this: Component<P, S, SS>) => void;
        onDidUnmount?: (this: Component<P, S, SS>) => void;
        onUncaughtError?: (this: Component<P, S, SS>, error: Error) => void;
        defaultProps?: AnyProps;
    }
    export function createClass<P extends AnyProps = AnyProps, S = any, SS = any>(options: CreateClassOptions<P, S, SS>): ComponentConstructor<P, S, SS>;
}

export as namespace HEle;
export = HEle;
