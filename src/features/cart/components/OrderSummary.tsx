'use client'

import Link from "next/link";
import { FaTruck } from "react-icons/fa";

type OrderSummaryProps = {
  totalCartPrice: number;
  numberOfCartItems: number;
}


export default function OrderSummary({
  totalCartPrice,
  numberOfCartItems,
}: OrderSummaryProps) {
  const subtotal = totalCartPrice;
  const shipping = subtotal > 500 ? 0 : 100;
  const total = Math.round(shipping + subtotal);
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-6">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF9933] px-6 py-5">
          <h2 className="text-2xl text-white font-semibold flex items-center gap-2">Order Summary</h2>
          <p className="text-orange-50 text-sm mt-1">
            You have {numberOfCartItems} {numberOfCartItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="p-6">
          {/* Free Shipping Progress */}
          {shipping > 0 && (
            <div className="bg-orange-50 rounded-xl p-4 mb-6 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 relative z-10">
                <FaTruck className="text-[#FF7A00]" />
                <span className="text-sm font-medium text-gray-700">
                  Add <span className="font-bold text-[#FF7A00]">{500 - subtotal} EGP</span> for free shipping
                </span>
              </div>
              <div className="h-2 bg-orange-200/50 rounded-full overflow-hidden relative z-10">
                <div
                  className="h-full bg-[#FF7A00] rounded-full transition-all duration-500"
                  style={{ width: `${(subtotal / 500) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          {shipping === 0 && (
            <div className="bg-green-50 rounded-xl p-4 flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <FaTruck className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-green-700">Free Shipping Unlocked!</p>
                <p className="text-sm text-green-600">
                  You qualify for free delivery
                </p>
              </div>
            </div>
          )}

          {/* Pricing Details */}
          <div className="space-y-4">
            {/* subtotal */}
            <div className="flex justify-between items-center text-gray-600 pb-4 border-b border-gray-100">
              <span className="font-medium text-gray-700">Subtotal</span>
              <span className="text-gray-900 font-semibold text-lg">{subtotal} EGP</span>
            </div>
            {/* shipping */}
            <div className="flex justify-between items-center text-gray-600 pb-4 border-b border-gray-100">
              <span className="font-medium text-gray-700">Shipping</span>
              {shipping === 0 ? (
                <span className="font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md text-sm">FREE</span>
              ) : (
                <span className="font-semibold text-gray-900">{shipping} EGP</span>
              )}
            </div>

            {/* Estimated Total */}
            <div className="flex justify-between items-end pt-2">
              <span className="text-lg font-semibold text-gray-800">Total</span>
              <div className="text-right">
                <span className="text-3xl text-[#FF7A00] font-bold block leading-none">
                  {total}
                </span>
                <span className="text-sm text-gray-500 font-medium">EGP</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Link href={"/checkout"} className="block w-full mt-8">
              <button className="w-full bg-[#FF7A00] hover:bg-[#E66D00] text-white py-4 rounded-xl text-lg font-semibold transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
