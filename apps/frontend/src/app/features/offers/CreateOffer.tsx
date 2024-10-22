
export const CreateOffer = () => {
    return (
        <div>
            <h3>Create offer</h3>

            <form onSubmit={handleSubmit(clientAction)}>
                <Input
                    {...register('content')}
                    label="Content"
                    error={errors.content}
                />
                <Input {...register('author')} label="Author" error={errors.author} />
                <Button label="Submit" type="submit" />
            </form>
        </div>
    )
};