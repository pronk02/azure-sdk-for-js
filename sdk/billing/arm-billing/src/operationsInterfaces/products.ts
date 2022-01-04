/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Product,
  ProductsListByCustomerOptionalParams,
  ProductsListByBillingAccountOptionalParams,
  ProductsListByBillingProfileOptionalParams,
  ProductsListByInvoiceSectionOptionalParams,
  ProductsGetOptionalParams,
  ProductsGetResponse,
  ProductsUpdateOptionalParams,
  ProductsUpdateResponse,
  TransferProductRequestProperties,
  ProductsMoveOptionalParams,
  ProductsMoveResponse,
  ProductsValidateMoveOptionalParams,
  ProductsValidateMoveResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Products. */
export interface Products {
  /**
   * Lists the products for a customer. These don't include products billed based on usage.The operation
   * is supported only for billing accounts with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  listByCustomer(
    billingAccountName: string,
    customerName: string,
    options?: ProductsListByCustomerOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Lists the products for a billing account. These don't include products billed based on usage. The
   * operation is supported for billing accounts with agreement type Microsoft Customer Agreement or
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  listByBillingAccount(
    billingAccountName: string,
    options?: ProductsListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Lists the products for a billing profile. These don't include products billed based on usage. The
   * operation is supported for billing accounts with agreement type Microsoft Customer Agreement or
   * Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: ProductsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Lists the products for an invoice section. These don't include products billed based on usage. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: ProductsListByInvoiceSectionOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Gets a product by ID. The operation is supported only for billing accounts with agreement type
   * Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    productName: string,
    options?: ProductsGetOptionalParams
  ): Promise<ProductsGetResponse>;
  /**
   * Updates the properties of a Product. Currently, auto renew can be updated. The operation is
   * supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the update product operation.
   * @param options The options parameters.
   */
  update(
    billingAccountName: string,
    productName: string,
    parameters: Product,
    options?: ProductsUpdateOptionalParams
  ): Promise<ProductsUpdateResponse>;
  /**
   * Moves a product's charges to a new invoice section. The new invoice section must belong to the same
   * billing profile as the existing invoice section. This operation is supported only for products that
   * are purchased with a recurring charge and for billing accounts with agreement type Microsoft
   * Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the move product operation.
   * @param options The options parameters.
   */
  move(
    billingAccountName: string,
    productName: string,
    parameters: TransferProductRequestProperties,
    options?: ProductsMoveOptionalParams
  ): Promise<ProductsMoveResponse>;
  /**
   * Validates if a product's charges can be moved to a new invoice section. This operation is supported
   * only for products that are purchased with a recurring charge and for billing accounts with agreement
   * type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param productName The ID that uniquely identifies a product.
   * @param parameters Request parameters that are provided to the validate move eligibility operation.
   * @param options The options parameters.
   */
  validateMove(
    billingAccountName: string,
    productName: string,
    parameters: TransferProductRequestProperties,
    options?: ProductsValidateMoveOptionalParams
  ): Promise<ProductsValidateMoveResponse>;
}
