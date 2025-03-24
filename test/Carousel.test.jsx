import Carousel from '@/components/Carousel/index.jsx'
import ProductModal from '@/components/Product/ProductModal.jsx'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'

const TestCompenent = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>open modal</button>
            <Carousel onclick={() => setIsOpen(true)} />
            {isOpen && <ProductModal onclick={() => setIsOpen(false)} />}
        </>
    )
}

describe('<Carousel /> & <ProductModal />', () => {
    it('should render correctly', () => {
        render(<TestCompenent />)
        expect(screen.getByTestId('carousel')).toBeInTheDocument()
        expect(screen.getByAltText('product-image-1')).toBeInTheDocument()
        expect(screen.getByAltText('product-image-2')).toBeInTheDocument()
        expect(screen.getByAltText('product-image-3')).toBeInTheDocument()
        expect(screen.getByAltText('product-image-4')).toBeInTheDocument()
    })

    it('should open the modal when clicking on a carousel image', async () => {
        render(<TestCompenent />)
        const slides = screen.getAllByTestId('slide')

        await userEvent.click(slides[2])
        const modal = screen.getByTestId('product-modal')
        expect(modal).toBeInTheDocument()

        const closeModal = screen.getByLabelText('close-modal')
        await userEvent.click(closeModal)
        await waitFor(() => expect(modal).not.toBeInTheDocument())
    })
})
