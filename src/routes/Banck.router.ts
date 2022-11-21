import express from "express";
import { BankSchemaType } from "../zod_schema/Bank.schema";

const router = express.Router();

let BankArr: BankSchemaType[] = [];

router.get("/", (req, res, nex) => {
  return res.status(200).json(BankArr);
});

router.post("/", (req, res, next) => {
  const nowCustomer = req.body as BankSchemaType;
  BankArr.push(nowCustomer);
  return res.status(201).json({ msg: "Customer is added.." });
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const updateCustomer = req.body as BankSchemaType;
  const newArr = BankArr.filter((elm) => {
    return elm.id !== id;
  });
  BankArr = newArr;
  return res.status(201).json({ msg: "updated" });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  const newArr = BankArr.filter((elm) => {
    return elm.id !== id;
  });
  BankArr = newArr;
  return res.status(201).json({ msg: "deleted" });
});

router.put("/withdraws/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body as BankSchemaType;
  const newArr = BankArr.filter((elm) => {
    if(elm.id == id)
    {
        body.balance-=elm.balance;
    }
    return elm.id !== id;
  });
  newArr.push(body);
  BankArr=newArr;
  return res.status(201).json({msg:"updated"});
});

router.put("/deposits/:id", (req, res, next) => {
    const id = req.params.id;
    const body = req.body as BankSchemaType;
    const newArr = BankArr.filter((elm) => {
        if(elm.id == id)
        {
            body.balance+=elm.balance;
        }
      return elm.id !== id;
    });
    newArr.push(body);
    BankArr=newArr;
    return res.status(201).json({msg:"deposits completed"});
  });
