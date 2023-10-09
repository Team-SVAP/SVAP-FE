import { Cookies } from "react-cookie";
import { NavigateFunction } from "react-router-dom";

interface Iicon {
  icon: string;
  action: () => void;
}

interface IInputContainer {
  type?: string;
  value: string;
  icon?: Iicon;
  width: string;
  height: string;
  id?: string;
  placeholder?: string;
}

export interface IButton {
  text: string;
  style?: object;
  disabled: boolean;
  action: () => void;
}

export interface IInput extends IInputContainer {
  change: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface ITextArea extends IInputContainer {
  change: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

export interface ILogout {
  cookie: Cookies;
  navigate: NavigateFunction;
}