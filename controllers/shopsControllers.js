import {
  addShop,
  // listContactsByFilter,
  getShopByFilter,
  // removeContactByFilter,
  // updateStatusContactByFilter,
  updateShopByFilter,
} from "../services/shopsServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import fs from "fs/promises";
import cloudinary from "../helpers/cloudinary.js";

// const getAllContacts = async (req, res) => {
//   console.log(req.query);
//   const { page = 1, limit = 20, favorite } = req.query;
//   const skip = (page - 1) * limit;
//   const { _id: owner } = req.user;
//   const result = !favorite
//     ? await listContactsByFilter({ owner }, { skip, limit })
//     : await listContactsByFilter({ owner, favorite }, { skip, limit });
//   res.json(result);
// };

const getShopId = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.params);
  // const { _id: owner } = req.user;
  // const result = await getShopByFilter({ _id: shopId, owner });
  const result = await getShopByFilter({ owner });
  if (!result) {
    throw HttpError(404);
  }
  let data = {};
  data = {
    // shopName: result.shopName,
    // shopOwnerName: result.shopOwnerName,
    // shopEmail: result.shopEmail,
    // shopPhone: result.shopPhone,
    // shopStreet: result.shopStreet,
    // shopCity: result.shopCity,
    // shopZip: result.shopZip,
    // shopOwnDelivery: result.shopOwnDelivery,
    // shopLogoURL: result.shopLogoURL,
    // owner: data.owner,
    shopId: result._id,
  };
  res.json(data);
};

const getShopInfo = async (req, res) => {
  const { shopId } = req.params;
  console.log(req.params);
  // const { _id: owner } = req.user;
  // const result = await getShopByFilter({ _id: shopId, owner });
  const result = await getShopByFilter({ _id: shopId });
  if (!result) {
    throw HttpError(404);
  }
  let data = {};
  data = {
    shopName: result.shopName,
    shopOwnerName: result.shopOwnerName,
    shopEmail: result.shopEmail,
    shopPhone: result.shopPhone,
    shopStreet: result.shopStreet,
    shopCity: result.shopCity,
    shopZip: result.shopZip,
    shopOwnDelivery: result.shopOwnDelivery,
    shopLogoURL: result.shopLogoURL,
    owner: result.owner,
    _id: result._id,
  };
  res.json(data);
};

const createShop = async (req, res) => {
  const { _id: owner } = req.user;
  const { url: shopLogoURL } = await cloudinary.uploader.upload(req.file.path, {
    folder: "shopLogos",
  });
  const { path: oldPath } = req.file;

  await fs.rm(oldPath);
  const result = await addShop({
    ...req.body,
    shopLogoURL,
    owner,
  });

  let data = {};
  data = {
    shopName: result.shopName,
    shopOwnerName: result.shopOwnerName,
    shopEmail: result.shopEmail,
    shopPhone: result.shopPhone,
    shopStreet: result.shopStreet,
    shopCity: result.shopCity,
    shopZip: result.shopZip,
    shopOwnDelivery: result.shopOwnDelivery,
    shopLogoURL: result.shopLogoURL,
    owner: result.owner,
    _id: result._id,
  };
  res.status(201).json(data);
};

const updateShop = async (req, res) => {
  console.log(req.body);

  const { shopId } = req.params;
  const { _id: owner } = req.user;

  if (req.file?.path) {
    const { url: shopLogoURL } = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "shopLogos",
      }
    );
    const { path: oldPath } = req.file;

    await fs.rm(oldPath);
    const result = await updateShopByFilter(
      { _id: shopId, owner },
      { ...req.body, shopLogoURL }
    );
    if (!result) {
      throw HttpError(404);
    }
    let data = {};
    data = {
      shopName: result.shopName,
      shopOwnerName: result.shopOwnerName,
      shopEmail: result.shopEmail,
      shopPhone: result.shopPhone,
      shopStreet: result.shopStreet,
      shopCity: result.shopCity,
      shopZip: result.shopZip,
      shopOwnDelivery: result.shopOwnDelivery,
      shopLogoURL: result.shopLogoURL,
      owner: result.owner,
      _id: result._id,
    };
    res.status(200).json(data);
  } else {
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "Body must have at least one field");
    }
    const { shopLogoURL } = await getShopByFilter({ _id: shopId });
    const result = await updateShopByFilter(
      { _id: shopId, owner },
      { ...req.body, shopLogoURL }
    );
    if (!result) {
      throw HttpError(404);
    }
    let data = {};
    data = {
      shopName: result.shopName,
      shopOwnerName: result.shopOwnerName,
      shopEmail: result.shopEmail,
      shopPhone: result.shopPhone,
      shopStreet: result.shopStreet,
      shopCity: result.shopCity,
      shopZip: result.shopZip,
      shopOwnDelivery: result.shopOwnDelivery,
      shopLogoURL: result.shopLogoURL,
      owner: result.owner,
      _id: result._id,
    };
    res.status(200).json(data);
  }

  // url ? (shopLogoURL = url) : shopLogoURL;

  // const result = await updateShopByFilter(
  //   { _id: shopId, owner },
  //   { ...req.body, shopLogoURL }
  // );
  // if (!result) {
  //   throw HttpError(404);
  // }
  // res.status(200).json(result);
};

export default {
  getShopId: ctrlWrapper(getShopId),
  getShopInfo: ctrlWrapper(getShopInfo),
  // deleteContact: ctrlWrapper(deleteContact),
  createShop: ctrlWrapper(createShop),
  updateShop: ctrlWrapper(updateShop),
  // updateStatusContact: ctrlWrapper(updateStatusContact),
};
