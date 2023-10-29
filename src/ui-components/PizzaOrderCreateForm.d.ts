/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PizzaOrderCreateFormInputValues = {
    orderId?: string;
    customerId?: string;
    storeId?: string;
    pizzas?: string;
};
export declare type PizzaOrderCreateFormValidationValues = {
    orderId?: ValidationFunction<string>;
    customerId?: ValidationFunction<string>;
    storeId?: ValidationFunction<string>;
    pizzas?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PizzaOrderCreateFormOverridesProps = {
    PizzaOrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderId?: PrimitiveOverrideProps<TextFieldProps>;
    customerId?: PrimitiveOverrideProps<TextFieldProps>;
    storeId?: PrimitiveOverrideProps<TextFieldProps>;
    pizzas?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PizzaOrderCreateFormProps = React.PropsWithChildren<{
    overrides?: PizzaOrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PizzaOrderCreateFormInputValues) => PizzaOrderCreateFormInputValues;
    onSuccess?: (fields: PizzaOrderCreateFormInputValues) => void;
    onError?: (fields: PizzaOrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PizzaOrderCreateFormInputValues) => PizzaOrderCreateFormInputValues;
    onValidate?: PizzaOrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function PizzaOrderCreateForm(props: PizzaOrderCreateFormProps): React.ReactElement;
