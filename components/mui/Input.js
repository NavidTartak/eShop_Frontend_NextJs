import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Skeleton,
} from "@mui/material";
import React from "react";
import styles from "./Input.module.css";
const Input = ({
  fontSize,
  error,
  isSkeleton,
  label,
  helperText,
  ...otherProps
}) => {
  return (
    <>
      <FormControl
        sx={
          !error
            ? {
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#6C6C6C;",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#6C6C6C;",
                  },
                },
              }
            : {
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#c82d2d;",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#c82d2d;",
                  },
                },
              }
        }
        fullWidth
        size="small"
      >
        {isSkeleton ? (
          <Skeleton variant="rounded" height={40} />
        ) : (
          <>
            {!label ? (
              <OutlinedInput
                sx={!fontSize ? "" : { fontSize: fontSize }}
                className={"IranSans"}
                fullWidth
                type="text"
                {...otherProps}
              />
            ) : (
              <>
                <InputLabel
                  sx={!fontSize ? "" : { fontSize: fontSize }}
                  className={"IranSans text-dark"}
                >
                  {label}
                </InputLabel>
                <OutlinedInput
                  label={`${label}`}
                  sx={!fontSize ? "" : { fontSize: fontSize }}
                  className={"IranSans"}
                  fullWidth
                  type="text"
                  {...otherProps}
                />
              </>
            )}
          </>
        )}

        <FormHelperText className={`${styles.helperText} IranSans text-danger`}>
          {isSkeleton ? <Skeleton /> : helperText}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default Input;
