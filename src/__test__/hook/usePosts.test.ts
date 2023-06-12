import useSWR, { MutatorOptions } from 'swr';
import { usePosts } from '@/hooks/usePosts';

jest.mock('swr');

describe('usePosts', () => {
  it('should fetch and return data', async () => {
    const mockedData : BlogType[] = [
      { id: 1, title: 'Post 1', body: 'Lorem ipsum dolor sit amet.' },
      { id: 2, title: 'Post 2', body: 'Consectetur adipiscing elit.' },
    ];

    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;
    mockUseSWR.mockReturnValueOnce({
        data: mockedData,
        error: null,
        isLoading: false,
        mutate: function (data?: unknown, opts?: boolean | MutatorOptions<unknown> | undefined): Promise<unknown> {
            throw new Error('Function not implemented.');
        },
        isValidating: false
    });

    const { data, error, isLoading } = usePosts();

    expect(mockUseSWR).toHaveBeenCalledTimes(1);
    expect(mockUseSWR).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/?_limit=10',
      expect.any(Function)
    );

    expect(data).toEqual(mockedData);
    expect(error).toBeNull();
    expect(isLoading).toBe(false);
  });

  it('should handle error', async () => {
    const mockedError = new Error('Failed to fetch data');

    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;
    mockUseSWR.mockReturnValueOnce({
        data: null,
        error: mockedError,
        isLoading: false,
        mutate: function (data?: unknown, opts?: boolean | MutatorOptions<unknown> | undefined): Promise<unknown> {
            throw new Error('Function not implemented.');
        },
        isValidating: false
    });

    const { data, error, isLoading } = usePosts();

    // expect(mockUseSWR).toHaveBeenCalledTimes(1);
    expect(mockUseSWR).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/?_limit=10',
      expect.any(Function)
    );

    expect(data).toBeNull();
    expect(error).toEqual(mockedError);
    expect(isLoading).toBe(false);
  });

  it('should handle loading state', async () => {
    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>;
    mockUseSWR.mockReturnValueOnce({
        data: null,
        error: null,
        isLoading: true,
        mutate: function (data?: unknown, opts?: boolean | MutatorOptions<unknown> | undefined): Promise<unknown> {
            throw new Error('Function not implemented.');
        },
        isValidating: false
    });

    const { data, error, isLoading } = usePosts();

    // expect(mockUseSWR).toHaveBeenCalledTimes(1);
    expect(mockUseSWR).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/?_limit=10',
      expect.any(Function)
    );

    expect(data).toBeNull();
    expect(error).toBeNull();
    expect(isLoading).toBe(true);
  });
});
