import {render, screen} from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn()

describe('Search component', () => {

  it('renders Search component', () => {
    render(
      <Search onChange={onChange} value={""}>
        Find:
      </Search>
    )

    expect(screen.getByText(/find/i)).toBeInTheDocument();
  })

  it('renders without children', () => {
    render(
      <Search onChange={onChange} value={""}/>
    )

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  })

  it('renders without placeholder', () => {
    render(
      <Search onChange={onChange} value={""}/>
    )

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  })

  it('custom placeholder works correctly', () => {
    render(
      <Search onChange={onChange} value={""} placeholder={'find post'}/>
    )

    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();

  });

  it('onChange works', () => {
    render(
      <Search onChange={onChange} value={""}>
        Find:
      </Search>
    )

    const text = 'React'

    userEvent.type(screen.getByRole('textbox'), text);

    expect(onChange).toHaveBeenCalledTimes(text.length)
  });

  it('dynamic styles works', () => {
    render(<Search value={'abc'} onChange={onChange}/>)

    expect(screen.getByRole('textbox')).toHaveClass('input');
    expect(screen.getByRole('textbox')).toHaveClass('filled');
    expect(screen.getByText('Search')).toHaveClass('label');
  });

  it('Search snapshot', () => {
    const search = render(
      <Search value={''} onChange={onChange}>
        Find:
      </Search>
    )

    expect(search).toMatchSnapshot()
  });
})
