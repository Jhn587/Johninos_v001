/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getPizzaOrder } from "../graphql/queries";
import { updatePizzaOrder } from "../graphql/mutations";
export default function PizzaOrderUpdateForm(props) {
  const {
    id: idProp,
    pizzaOrder: pizzaOrderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderId: "",
    customerId: "",
    storeId: "",
    pizzas: "",
  };
  const [orderId, setOrderId] = React.useState(initialValues.orderId);
  const [customerId, setCustomerId] = React.useState(initialValues.customerId);
  const [storeId, setStoreId] = React.useState(initialValues.storeId);
  const [pizzas, setPizzas] = React.useState(initialValues.pizzas);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pizzaOrderRecord
      ? { ...initialValues, ...pizzaOrderRecord }
      : initialValues;
    setOrderId(cleanValues.orderId);
    setCustomerId(cleanValues.customerId);
    setStoreId(cleanValues.storeId);
    setPizzas(
      typeof cleanValues.pizzas === "string" || cleanValues.pizzas === null
        ? cleanValues.pizzas
        : JSON.stringify(cleanValues.pizzas)
    );
    setErrors({});
  };
  const [pizzaOrderRecord, setPizzaOrderRecord] =
    React.useState(pizzaOrderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getPizzaOrder.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPizzaOrder
        : pizzaOrderModelProp;
      setPizzaOrderRecord(record);
    };
    queryData();
  }, [idProp, pizzaOrderModelProp]);
  React.useEffect(resetStateValues, [pizzaOrderRecord]);
  const validations = {
    orderId: [],
    customerId: [],
    storeId: [],
    pizzas: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          orderId: orderId ?? null,
          customerId: customerId ?? null,
          storeId: storeId ?? null,
          pizzas: pizzas ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updatePizzaOrder.replaceAll("__typename", ""),
            variables: {
              input: {
                id: pizzaOrderRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PizzaOrderUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order id"
        isRequired={false}
        isReadOnly={false}
        value={orderId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId: value,
              customerId,
              storeId,
              pizzas,
            };
            const result = onChange(modelFields);
            value = result?.orderId ?? value;
          }
          if (errors.orderId?.hasError) {
            runValidationTasks("orderId", value);
          }
          setOrderId(value);
        }}
        onBlur={() => runValidationTasks("orderId", orderId)}
        errorMessage={errors.orderId?.errorMessage}
        hasError={errors.orderId?.hasError}
        {...getOverrideProps(overrides, "orderId")}
      ></TextField>
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              customerId: value,
              storeId,
              pizzas,
            };
            const result = onChange(modelFields);
            value = result?.customerId ?? value;
          }
          if (errors.customerId?.hasError) {
            runValidationTasks("customerId", value);
          }
          setCustomerId(value);
        }}
        onBlur={() => runValidationTasks("customerId", customerId)}
        errorMessage={errors.customerId?.errorMessage}
        hasError={errors.customerId?.hasError}
        {...getOverrideProps(overrides, "customerId")}
      ></TextField>
      <TextField
        label="Store id"
        isRequired={false}
        isReadOnly={false}
        value={storeId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              customerId,
              storeId: value,
              pizzas,
            };
            const result = onChange(modelFields);
            value = result?.storeId ?? value;
          }
          if (errors.storeId?.hasError) {
            runValidationTasks("storeId", value);
          }
          setStoreId(value);
        }}
        onBlur={() => runValidationTasks("storeId", storeId)}
        errorMessage={errors.storeId?.errorMessage}
        hasError={errors.storeId?.hasError}
        {...getOverrideProps(overrides, "storeId")}
      ></TextField>
      <TextAreaField
        label="Pizzas"
        isRequired={false}
        isReadOnly={false}
        value={pizzas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderId,
              customerId,
              storeId,
              pizzas: value,
            };
            const result = onChange(modelFields);
            value = result?.pizzas ?? value;
          }
          if (errors.pizzas?.hasError) {
            runValidationTasks("pizzas", value);
          }
          setPizzas(value);
        }}
        onBlur={() => runValidationTasks("pizzas", pizzas)}
        errorMessage={errors.pizzas?.errorMessage}
        hasError={errors.pizzas?.hasError}
        {...getOverrideProps(overrides, "pizzas")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || pizzaOrderModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || pizzaOrderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
