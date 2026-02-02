import React from 'react'
import { useId } from 'react';
function InputBox( {
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  className="",
  
}) {
  const amountInputId=useId()
    return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2 '>
            <label className='text-black/40 text-sm mb-2 ' htmlFor={amountInputId}>
            {label}
            </label>
            <input id ={amountInputId}type="number" placeholder='Amount' className='outline-none w-full' disabled={amountDisable} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black mb-2 w-full'>Currency Type</p>
            <select className='rounded-lg px-1 py-1 bg-gray-50 cursor-pointer outline' value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
              {currencyOptions.map((currency)=>(
                <option key={currency}
                value={currency}>
                  {currency}
                </option>
              ))}
              </select> </div>
      </div>
    </>
  )
}

export default InputBox;
