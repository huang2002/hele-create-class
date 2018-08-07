import { Component, ComponentConstructor, RawProps } from "hele";

export as namespace HEle;

export interface CreateClassOptions<P extends RawProps = RawProps, S = any, SS = any> {
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
    defaultProps?: RawProps;
}

export function createClass<P extends RawProps = RawProps, S = any, SS = any>(options: CreateClassOptions<P, S, SS>): ComponentConstructor<P, S, SS>;
