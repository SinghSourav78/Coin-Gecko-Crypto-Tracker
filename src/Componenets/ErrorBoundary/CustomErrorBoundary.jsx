import { ErrorBoundary } from 'react-error-boundary';

function CustomErrorBoundaryUI( {error, resetErrorBoundary} ) {
    // yeh hum daisy UI se copy paste kia h [alert alert-error]
    return (
        <div className='h-[100vh] flex justify-center items-center px-6'>
            <div role='alert' className='alert alert-error'>
            <p>Something went wrong: </p>
            {/* if error exisgt then you show the error message [error?.message] */}
            <div>{error?.message}</div>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
        </div>
    )
}

export default function CustomErrorBoundary({ children }) {
    return (
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundaryUI}
            onReset={() => window.location.reload()} 
        >
            {children}
        </ErrorBoundary>
    )
}