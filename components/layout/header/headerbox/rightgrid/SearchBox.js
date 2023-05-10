import Input from "@/components/mui/Input";
import React from "react";
import { Grid, Box } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { CircularProgress } from "@mui/material";
import styles from "./SearchBox.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
const SearchBox = () => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const changeInputValueHandler = (e) => setInputValue(e.target.value);
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    setSubmitLoading(true);
    await router.push(`/products/search/${inputValue}`);
    setSubmitLoading(false);
  };
  return (
    <Grid container justifyContent="space-evenly" alignItems="center">
      <Grid
        component={"form"}
        container
        alignItems="center"
        item
        xs={9.5}
        sm={10}
        xl={10}
        md={9.5}
        onSubmit={submitHandler}
      >
        <Input
          value={inputValue}
          onChange={changeInputValueHandler}
          fontSize="0.8em"
          fullWidth
          label="جستجو ..."
        />
      </Grid>
      <Grid container alignItems="center" item xs={2} sm={1.5} xl={1.5} md={2}>
        {!submitLoading ? (
          <Box
            component={"button"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={35}
            height={35}
            className={styles.button}
            type="submit"
            onClick={submitHandler}
          >
            <FaSearch />
          </Box>
        ) : (
          <Box
            component={"button"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={35}
            height={35}
            className={styles.loadingButton}
            disabled
          >
            <CircularProgress size={20} className="text-dark" />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default SearchBox;
