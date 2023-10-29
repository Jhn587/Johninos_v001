/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderFormInputValues = {
    Field0?: string;
};
export declare type OrderFormValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderFormOverridesProps = {
    OrderFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type OrderFormProps = React.PropsWithChildren<{
    overrides?: OrderFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: OrderFormInputValues) => void;
    onChange?: (fields: OrderFormInputValues) => OrderFormInputValues;
    onValidate?: OrderFormValidationValues;
} & React.CSSProperties>;
export default function OrderForm(props: OrderFormProps): React.ReactElement;
